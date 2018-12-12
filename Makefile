IMAGE_NAME = mphclub_frontend
CURRENT_HEAD = $$(git rev-parse HEAD)
REGISTRY_URL = 077003688714.dkr.ecr.us-east-1.amazonaws.com

docker-build:
	@docker build -t ${IMAGE_NAME}:${CURRENT_HEAD} -f ./Dockerfile .

docker-tag:
	@docker tag ${IMAGE_NAME}:${CURRENT_HEAD} ${IMAGE_NAME}:latest
	@docker tag ${IMAGE_NAME}:latest ${REGISTRY_URL}/${IMAGE_NAME}:latest
	@docker tag ${IMAGE_NAME}:latest ${REGISTRY_URL}/${IMAGE_NAME}:${CURRENT_HEAD}

docker-clean:
	@docker rmi ${IMAGE_NAME}:latest \
	            ${IMAGE_NAME}:${CURRENT_HEAD} \
				${REGISTRY_URL}/${IMAGE_NAME}:latest \
				${REGISTRY_URL}/${IMAGE_NAME}:${CURRENT_HEAD}

docker-push:
	@docker push ${REGISTRY_URL}/${IMAGE_NAME}:latest
	@docker push ${REGISTRY_URL}/${IMAGE_NAME}:${CURRENT_HEAD}

docker-kube-update:
	@kubectl set image deployments/frontend-deployment frontend=${REGISTRY_URL}/${IMAGE_NAME}:${CURRENT_HEAD}

docker-all: docker-build docker-tag docker-push docker-kube-update

all: docker-all

clean: docker-clean

export-current:
	@echo ${CURRENT_HEAD}
