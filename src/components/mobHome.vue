<script>
export default {
    data() {
        return {
            activeTab: 0,
            tabs:["사료","간식","용품"]
        };
    },
    methods: {
        activateTab(index) {
            this.activeTab = index;
        }
    }
}
</script>


<template>
    <div id="mobHome">
        <div class="main_visual">
            <div>
                <a href="#none" title="">
                    <img src="../assets/images/visual01.png"/>
                </a>
            </div>
        </div>
        <div class="notice_sec">
            <div>
                <p class="fix">공지</p>
                <div>
                    <span>[공지] 펫푸드 2000총 최대 69% 인하</span>
                </div>
                <span>></span>
            </div>
        </div>
        <div class="tab_sec">
            <div>
                <div class="tab_list" >
                    <button type="button" 
                    class="tab_tit_btn" 
                    v-for="(tab, index) in tabs" :key = "tab"
                    v-bind:class="{active:activeTab===index}"
                    @click="activateTab(index)"><span>{{tab}}</span></button>
                </div>
                <div class="tab_cont">
                    <div class="tab_cont_inner">
                        <ul class="tab_cont_slide" v-show="activeTab === 0">
                            <li>
                                <a href="#none" title="">
                                    <span class="tit">어덜트</span>
                                    <span class="desc">(1-7세)</span>
                                </a>
                            </li>
                            <li>
                                <a href="#none" title="">
                                    <span class="tit">퍼피</span>
                                    <span class="desc">(1세미만)</span>
                                </a>
                            </li>
                            <li>
                                <a href="#none" title="">
                                    <span class="tit">시니어</span>
                                    <span class="desc">(7세이상)</span>
                                </a>
                            </li>
                            <li>
                                <a href="#none" title="">
                                    <span class="tit">습식사료</span>
                                </a>
                            </li>
                            <li>
                                <a href="#none" title="">
                                    <span class="tit">자연식</span>
                                </a>
                            </li>
                            <li>
                                <a href="#none" title="">
                                    <span class="tit">에어/동결사료</span>
                                </a>
                            </li>
                            <li>
                                <a href="#none" title="">
                                    <span class="tit">건식사료</span>
                                    <span class="desc"></span>
                                </a>
                            </li>
                            <li>
                                <a href="#none" title="">
                                    <span class="tit">더보기</span>
                                </a>
                            </li>
                        </ul>
                        <ul class="tab_cont_slide" v-show="activeTab === 1">
                            <li>
                                <a href="#none" title="">
                                    <span class="tit">2어덜트</span>
                                    <span class="desc">(1-7세)</span>
                                </a>
                            </li>
                            <li>
                                <a href="#none" title="">
                                    <span class="tit">2퍼피</span>
                                    <span class="desc">(1세미만)</span>
                                </a>
                            </li>
                            <li>
                                <a href="#none" title="">
                                    <span class="tit">2시니어</span>
                                    <span class="desc">(7세이상)</span>
                                </a>
                            </li>
                            <li>
                                <a href="#none" title="">
                                    <span class="tit">2습식사료</span>
                                </a>
                            </li>
                            <li>
                                <a href="#none" title="">
                                    <span class="tit">2자연식</span>
                                </a>
                            </li>
                            <li>
                                <a href="#none" title="">
                                    <span class="tit">2에어/동결사료</span>
                                </a>
                            </li>
                            <li>
                                <a href="#none" title="">
                                    <span class="tit">2건식사료</span>
                                    <span class="desc"></span>
                                </a>
                            </li>
                            <li>
                                <a href="#none" title="">
                                    <span class="tit">2더보기</span>
                                </a>
                            </li>
                        </ul>
                        <ul class="tab_cont_slide" v-show="activeTab === 2">
                            <li>
                                <a href="#none" title="">
                                    <span class="tit">3어덜트</span>
                                    <span class="desc">(1-7세)</span>
                                </a>
                            </li>
                            <li>
                                <a href="#none" title="">
                                    <span class="tit">3퍼피</span>
                                    <span class="desc">(1세미만)</span>
                                </a>
                            </li>
                            <li>
                                <a href="#none" title="">
                                    <span class="tit">3시니어</span>
                                    <span class="desc">(7세이상)</span>
                                </a>
                            </li>
                            <li>
                                <a href="#none" title="">
                                    <span class="tit">3습식사료</span>
                                </a>
                            </li>
                            <li>
                                <a href="#none" title="">
                                    <span class="tit">3자연식</span>
                                </a>
                            </li>
                            <li>
                                <a href="#none" title="">
                                    <span class="tit">3에어/동결사료</span>
                                </a>
                            </li>
                            <li>
                                <a href="#none" title="">
                                    <span class="tit">3건식사료</span>
                                    <span class="desc"></span>
                                </a>
                            </li>
                            <li>
                                <a href="#none" title="">
                                    <span class="tit">3더보기</span>
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
        <div class="discount_sec"></div>
        <div class="sub_visual"></div>
        <div class="product_sec"></div>
    </div>
</template>