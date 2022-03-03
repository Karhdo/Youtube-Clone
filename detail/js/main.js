$(document).ready(function () {
    let detailVideoElement = $(".detail-video");
    let videContentElement = $(".video-content");
    let videoData = JSON.parse(localStorage.getItem("videoData"));

    detailVideoElement.html(`<iframe width="100%" height="100%" src="https://www.youtube.com/embed/${videoData.videoId}" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`);

    videContentElement.html(`
    <div class="content__info col-8 pl-5 mt-4">
        <span>${videoData.contentInfo}</span>

        <div class="info__action d-flex justify-content-between mt-2">
            <div class="action__view">10.267 lượt xem - 26 thg 2, 2022</div>
            <div class="d-flex">
                <div class="action__like mx-4"><i class="fa-solid fa-thumbs-up mr-2"></i> 420</div>
                <div class="action__dislike mx-4"><i class="fa-solid fa-thumbs-down mr-2"></i> Dislike</div>
                <div class="action__share mx-4"><i class="fa-solid fa-share mr-2"></i> Share</div>
                <div class="action__more mx-4"><i class="fa-solid fa-ellipsis mr-2"></i></div>
            </div>
        </div>

        <div class="info__channel d-flex justify-content-between mt-4">
            <div class="d-flex">
                <img class="channel__img" src="${videoData.channelIcon}" alt="" />
                <div class="channel__name">${videoData.channelName}</div>
            </div>
            <button class="info__subscription">SUBSCRIPTION</button>
        </div>
    </div>
    <div class="content__suggest col-4 mt-4">
        <div class="row">
            <a href="#" class="col-12 nav-link p-0 mt-2">
                <div class="row">
                    <div class="col-5 d-flex justify-content-end pr-0">
                        <img class="suggest__thumbnail" src="https://i.ytimg.com/vi/fOKgHld96mU/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLBkQT6sxwmWsEg6O_IsTkFfZVY9iQ" alt="" />
                    </div>
                    <div class="col-7">
                        <div class="suggest__content">Youtube API - How to make youtube Clone | Fully working youtube clone with HTML, CSS, JS</div>
                        <div class="suggest__channle-name suggest__channle-name--active">
                            Modern Web
                            <i class="fa-solid fa-circle-check ml-1"></i>
                        </div>
                        <div class="suggest__view">650N views - 6 days ago</div>
                        <div class="suggest__status suggest__status--new">New</div>
                    </div>
                </div>
            </a>
            <a href="#" class="col-12 nav-link p-0 mt-2">
                <div class="row">
                    <div class="col-5 d-flex justify-content-end pr-0">
                        <img class="suggest__thumbnail" src="https://i.ytimg.com/vi/fOKgHld96mU/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLBkQT6sxwmWsEg6O_IsTkFfZVY9iQ" alt="" />
                    </div>
                    <div class="col-7">
                        <div class="suggest__content">Youtube API - How to make youtube Clone | Fully working youtube clone with HTML, CSS, JS</div>
                        <div class="suggest__channle-name suggest__channle-name--active">
                            Modern Web
                            <i class="fa-solid fa-circle-check ml-1"></i>
                        </div>
                        <div class="suggest__view">650N views - 6 days ago</div>
                        <div class="suggest__status suggest__status--new">New</div>
                    </div>
                </div>
            </a>
            <a href="#" class="col-12 nav-link p-0 mt-2">
                <div class="row">
                    <div class="col-5 d-flex justify-content-end pr-0">
                        <img class="suggest__thumbnail" src="https://i.ytimg.com/vi/fOKgHld96mU/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLBkQT6sxwmWsEg6O_IsTkFfZVY9iQ" alt="" />
                    </div>
                    <div class="col-7">
                        <div class="suggest__content">Youtube API - How to make youtube Clone | Fully working youtube clone with HTML, CSS, JS</div>
                        <div class="suggest__channle-name suggest__channle-name--active">
                            Modern Web
                            <i class="fa-solid fa-circle-check ml-1"></i>
                        </div>
                        <div class="suggest__view">650N views - 6 days ago</div>
                        <div class="suggest__status suggest__status--new">New</div>
                    </div>
                </div>
            </a>
        </div>
    </div>
    `);
});
