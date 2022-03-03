
const videoCardContainer = $(".container__list-videos");

let api_key = "AIzaSyC-VcVmaw45Ah4_pWG6lTTgTcUtuH4rIBk";
let video_http = "https://www.googleapis.com/youtube/v3/videos?";
let channel_http = "https://www.googleapis.com/youtube/v3/channels?";

fetch(
    video_http +
        new URLSearchParams({
            key: api_key,
            part: "snippet",
            chart: "mostPopular",
            maxResults: 80,
            regionCode: "IN",
        }),
)
    .then((res) => res.json())
    .then((data) => {
        data.items.forEach((item) => {
            getChannelIcon(item);
        });
    })
    .catch((err) => console.log(err));

const getChannelIcon = (video_data) => {
    fetch(
        channel_http +
            new URLSearchParams({
                key: api_key,
                part: "snippet",
                id: video_data.snippet.channelId,
            }),
    )
        .then((res) => res.json())
        .then((data) => {
            video_data.channelThumbnail = data.items[0].snippet.thumbnails.default.url;
            makeVideoCard(video_data);
        });
};

const makeVideoCard = (data) => {
    videoCardContainer.html(
        videoCardContainer.html() +
            `
        <div class="col-3 video">
            <div class="video__thumbnail">
                <img class="thumbnail__img" src="${data.snippet.thumbnails.high.url}" alt="thumbnail" />
                <div class="thumbnail__duration-video">11:09</div>

                <a href="#" class="video-zoom nav-link" data-video-id='${data.id}'>
                    <div class="video__thumbnail">
                        <img class="thumbnail__img" src="${data.snippet.thumbnails.high.url}" alt="thumbnail" />
                        <div class="thumbnail__duration-video">11:09</div>
                    </div>
                    <div class="video__content">
                        <img class="content__channel-icon" src="${data.channelThumbnail}" alt="" />
                        <div class="content__info">
                            <span>${data.snippet.title}</span>
                            <p class="info__channel-name">${data.snippet.channelTitle}</p>
                        </div>
                    </div>
                    <div class="video__views">2.2M views - 1 day ago</div>
                    <div class="video-zoom__watch-later">
                        <i class="fa-solid fa-clock mr-1"></i>
                        WATCH LATER
                    </div>
                    <div class="video-zoom__add-queue my-2">
                        <i class="fa-solid fa-list mr-1"></i>
                        ADD TO QUEUE
                    </div>
                </a>

            </div>
            <div class="video__content">
                <img class="content__channel-icon" src="${data.channelThumbnail}" alt="" />
                <div class="content__info">
                    <span>${data.snippet.title}</span>
                    <p class="info__channel-name">${data.snippet.channelTitle}</p>
                </div>
            </div>
            <div class="video__views">2.2M views - 1 day ago</div>
        </div>
    `,
    );
};

let toggleBtn = $(".start__toggle-btn");

let sideBarElement = $(".side-bar");
let filtersElement = $(".filters");
let containerElement = $(".container-video");

toggleBtn.click(function () {
    sideBarElement.toggleClass("small-sidebar");
    filtersElement.toggleClass("filters-large");
    containerElement.toggleClass("container-video-large");
});

$(document).on("click", ".video-zoom", function () {
    let videoData = {};

    videoData.videoId = $(this).data("video-id");
    videoData.channelIcon = $(this).find(".content__channel-icon").attr("src");
    videoData.channelName = $(this).find(".info__channel-name").html();
    videoData.contentInfo = $(this).find(".content__info span").html();

    localStorage.setItem("videoData", JSON.stringify(videoData));
    window.location.href = "./detail-index.html";
});
