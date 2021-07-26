import requests
import os
import threading

response = requests.get('https://api.mangadex.org/chapter?manga=8946189d-682f-4838-9c2a-3c2dd5132f2c&chapter=2')

response_json = response.json()

results = response_json.get('results')[0]

data = results['data']

attributes = data['attributes']

chapter_hash = attributes['hash']

pages = attributes['data']

data_url = 'https://s2.mangadex.org/data/{}/'.format(chapter_hash)

try:
    os.mkdir('agk-ch2')
except FileExistsError:
    pass

os.chdir(os.getcwd() + '/agk-ch2')

class imageDownloaderThread(threading.Thread):
    def __init__(self, threadID, page_list, counter):
        threading.Thread.__init__(self)
        self.threadID = threadID
        self.page_list = page_list
        self.counter = counter
    def run(self):
        for image_hash in self.page_list:
            image_url = data_url + image_hash
            image_response = requests.get(image_url)
            image = image_response.content
            file = open(str(self.counter) + '.jpg', 'wb')
            file.write(image)
            file.close
            self.counter += 1


# def download_image(page_list, counter):
#     for image_hash in page_list:
#         image_url = data_url + image_hash
#         image_response = requests.get(image_url)
#         image = image_response.content
#         file = open(str(counter) + '.jpg', 'wb')
#         file.write(image)
#         file.close
#         counter += 1

page_split = len(pages) // 2

# thread_lower = threading.Thread(download_image, (pages[:page_split], 1,))
# thread_upper = threading.Thread(download_image, (pages[page_split:], page_split+1,))

thread_lower = imageDownloaderThread(1, pages[:page_split], 1)
thread_upper = imageDownloaderThread(1, pages[page_split:], page_split+1)

thread_lower.start()
thread_upper.start()
