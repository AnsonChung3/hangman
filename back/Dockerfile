FROM python:3
WORKDIR D/Coding/FrontBackCombinedProto/back
RUN pip install aiohttp
RUN pip install aiohttp_cors
COPY *.py .

# docker run -d -p <port>:8080 <image id>
# That says "when I go to port <port>, forward that request to 8080 on the docker image"
# this is set up with frontend running on 8080 in mind
EXPOSE 8080

CMD [ "python", "./app.py" ]
