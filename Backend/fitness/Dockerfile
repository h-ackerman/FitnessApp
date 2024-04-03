
# Use OpenJDK 11 as the base image
FROM adoptopenjdk/openjdk11:alpine-slim
# Set the working directory inside the container
WORKDIR /app
# Copy the compiled JAR file into the container at /app
COPY target/spring-boot-docker.jar /app/spring-boot-docker.jar
# Expose the port that your Spring Boot application runs on
EXPOSE 8080
# Define the command to run your Spring Boot application when the container starts
CMD ["java", "-jar", "spring-boot-docker.jar"]