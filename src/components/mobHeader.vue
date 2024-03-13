<script>
    import { defineComponent } from "vue";
    import { Carousel, Slide } from "vue3-carousel";
    import "vue3-carousel/dist/carousel.css";
    export default defineComponent({
        name: "AutoPlay",
        components: {
            Carousel,
            Slide,
        },
        data() {
            return {
                topNavSlide: {
                    itemsToShow: 4.8,
                    transition: 800,
                },
                topNavList: [
                    {
                        url: "#none",
                        title: "HOME"
                    },
                    {
                        url: "#none",
                        title: "웰컴펫페어"
                    },
                    {
                        url: "#none",
                        title: "사료최저가!"
                    },
                    {
                        url: "#none",
                        title: "베스트어워즈"
                    },
                    {
                        url: "#none",
                        title: "NEW신상"
                    },
                    {
                        url: "#none",
                        title: "맘마샘플"
                    },
                    {
                        url: "#none",
                        title: "체험단특가"
                    },
                    {
                        url: "#none",
                        title: "비밀상점"
                    },
                    {
                        url: "#none",
                        title: "중대형견"
                    },
                    {
                        url: "#none",
                        title: "방시리추천"
                    },
                    {
                        url: "#none",
                        title: "이벤트"
                    },
                ]
            }
        }
    });
</script>
<template>
    <div id="mobHeader">
        <div class="top_cont">
            <div class="left_btn_box">
                <ul class="type_select">
                    <li>
                        <button type="button" class="btn_box_pink"><span>강아지</span><span class="chk_box"><img class="svg_colr_wh" src="@/assets/images/chevron-down-solid.svg" alt=""/></span></button>
                        <div class="select_list">
                            <p>강아지</p>
                            <p>고양이</p>
                        </div>
                    </li>
                </ul>
                <button type="button" class="btn_box_pink">
                    <span>배송지 입력</span>
                    <span class="chk_box"><img class="svg_colr_wh" src="@/assets/images/chevron-down-solid.svg" alt=""/></span>
                </button>
            </div>
            <div class="right_btn_box">
                <a href="#none" title=""><img src="../assets/images/search.svg" alt=""/></a>
                <a href="#none" title=""><img src="../assets/images/bag-shopping-solid.svg" alt=""/></a>
            </div>
        </div>
        <div class="bott_cont">
            <div id="topNav">
                <Carousel v-bind="topNavSlide">
                    <slide class="nav_slide_list" v-for="(nav, key) in topNavList" :key="key">
                        <a class="link" :href="nav.url" :title="nav.title">{{ nav.title }}</a>
                    </slide>
                </Carousel>
            </div>
        </div>
    </div>
</template>
