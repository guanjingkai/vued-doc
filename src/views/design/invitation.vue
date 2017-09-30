<style>
    .design-img-boxs {
        max-width: 592px;
    }
    
    .design-img-good:after {
        background: #2d8cf0;
    }
    
    .design-img-error:after {
        background: #ed3f14;
    }
    
    .design-label-boxs {
        width: calc(~"100% - 592px");
        padding-right:16px;
    }
    
    .design-img {
        width: 100%;
    }
    
    .design-img-bg {
        background: #eee;
        padding: 16px;
        margin: 0px 8px;
        position: relative;
    }
    
    .design-img-bg:after {
        content: "";
        width: 100%;
        height: 3px;
        display: block;
        position: absolute;
        bottom: 0;
        left: 0;
    }
    
    .ivu-article .ivu-card img {
        height: auto;
    }
    
    .preview-image-title {
        font-size: 12px;
        line-height: 1.5;
        margin-top: 5px;
        color: rgba(0, 0, 0, .65);
    }
    
    .ivu-row {
        margin-bottom: 24px;
    }
    
    .preview-image-description {
        font-size: 12px;
        margin-top: 2px;
        color: rgba(0, 0, 0, .43);
        line-height: 1.5;
    }
    
    .design-hr {
        height: 1px;
        border: 0;
        background: #e9e9e9;
        margin: 16px 0;
        clear: both;
    }
</style>

<template>
    <i-article>
        <article>
            <h1>提供邀请</h1>
            <p>很多富交互模式（eg：『拖放』、『行内编辑』、『上下文工具』）都有一个共同问题，就是缺少易发现性。所以『提供邀请』是成功完成人机交互的关键所在。</p>
            <p>邀请就是引导用户进入下一个交互层次的提醒和暗示，通常包括意符（eg：实时的提示信息）和可供性，以表明在下一个界面可以做什么。当可供性中可感知的部分（Perceived Affordance）表现为意符时，人机交互的过程往往更加自然、顺畅。</p>
            <Alert>意符（Signifiers） ：一种额外的提示，告诉用户可以采取什么行为，以及应该怎么操作；必须是可感知（eg：视觉、听觉、触觉等）。——摘自《设计心理学 1 》</Alert>
            <Alert>可供性（Affordance） ：也被翻译成『示能』，由 James J. Gibson 提出，定义为物品的特性与决定物品用途的主体能力之间的关系；其中部分可感知（此部分定义为 Perceived Affordance），部分不可感知。——摘自《设计心理学 1 》</Alert>
            <Anchor title="静态邀请" h2></Anchor>
            <p>指通过可视化技术在页面上提供引导交互的邀请。</p>
            <Row type="flex">
                <Col class-name="design-label-boxs">
                <p>引导操作邀请：一般以静态说明形式出现在页面上，不过它们在视觉上也可以表现出多种不同样式。 常见类型：『文本邀请』、『白板式邀请』、『未完成邀请』。</p>
                </Col>
                <Col class-name="design-img-boxs">
                <Row>
                    <Col span="24">
                    <div class="design-img-bg">
                        <Card :bordered="false">
                            <img class="design-img" src="../../images/design/pWnlJpbkCPIaKdP.png">
                        </Card>
                    </div>
                    <div class="preview-image-title">文本邀请示例</div>
                    <div class="preview-image-description"></div>
                    </Col>
                </Row>
                <Row>
                    <Col span="24">
                    <div class="design-img-bg">
                        <Card :bordered="false">
                            <img class="design-img" src="../../images/design/DkOYgfJHDuzhyBg.png">
                        </Card>
                    </div>
                    <div class="preview-image-title">白班式邀请示例</div>
                    <div class="preview-image-description"></div>
                    </Col>
                </Row>
                <Row>
                    <Col span="24">
                    <div class="design-img-bg">
                        <Card :bordered="false">
                            <img class="design-img" src="../../images/design/cojQlWfINmsVDGd.png">
                        </Card>
                    </div>
                    <div class="preview-image-title">未完成邀请示例</div>
                    <div class="preview-image-description"></div>
                    </Col>
                </Row>
                </Col>
            </Row>
            <Row type="flex">
                <Col class-name="design-label-boxs">
                <p>漫游探索邀请：是向用户介绍新功能的好方法，尤其是对于那些设计优良的界面。但是它不是『创口贴』，仅通过它不能解决界面交互的真正问题。</p>
                <Alert>注：保持漫游过程简单，让用户容易退出和重新启动；保持内容简明扼要，与功能密切相关。</Alert>
                </Col>
                <Col class-name="design-img-boxs">
                <Row>
                    <Col span="24">
                    <div class="design-img-bg">
                        <Card :bordered="false">
                            <img class="design-img" src="../../images/design/TGnzYViseCoFBYL.png">
                        </Card>
                    </div>
                    <div class="preview-image-title">漫游探索邀请示例 1</div>
                    <div class="preview-image-description">在用户首次登陆时出现少量『探索点』，当用户点击『我知道了』，能快速切换到下一个探索点。
                    </div>
                    </Col>
                </Row>
                <Row>
                    <Col span="24">
                    <div class="design-img-bg">
                        <Card :bordered="false">
                            <img class="design-img" src="../../images/design/KQabdaTbolVuMld.png">
                        </Card>
                    </div>
                    <div class="preview-image-title">漫游探索邀请示例 2</div>
                    <div class="preview-image-description">以书签的形式展示探索点，用户可主动选择进行探索
                    </div>
                    </Col>
                </Row>
                </Col>
            </Row>
            <hr class="design-hr">
            <Anchor title="动态邀请" h2></Anchor>
            <p>指以响应用户在特定位置执行特定操作的方式，提供特定的邀请。</p>
            <Row type="flex">
                <Col class-name="design-label-boxs">
                <p>指以响应用户在特定位置执行特定操作的方式，提供特定的邀请。</p>
                </Col>
                <Col class-name="design-img-boxs">
                <Row>
                    <Col span="24">
                    <div class="design-img-bg">
                        <Card :bordered="false">
                            <img class="design-img" src="../../images/design/gzfDJLcETyTOfFg.png">
                        </Card>
                    </div>
                    <div class="preview-image-title">悬停邀请示例 1</div>
                    <div class="preview-image-description">鼠标『悬停』整个卡片时，可被点击部分变为蓝色的『文字链』。
                    </div>
                    </Col>
                </Row>
                <Row>
                    <Col span="24">
                    <div class="design-img-bg">
                        <Card :bordered="false">
                            <img class="design-img" src="../../images/design/tdJWZFIDWYuMVIe.png">
                        </Card>
                    </div>
                    <div class="preview-image-title">悬停邀请示例 2</div>
                    <div class="preview-image-description">鼠标『悬停』时，出现『选择此模板』的按钮。
                    </div>
                    </Col>
                </Row>
                </Col>
            </Row>
            <Row type="flex">
                <Col class-name="design-label-boxs">
                <p>推论邀请：用于交互期间，合理推断用户可能产生的需求。</p>
                </Col>
                <Col class-name="design-img-boxs">
                <Row>
                    <Col span="24">
                    <div class="design-img-bg">
                        <Card :bordered="false">
                            <img class="design-img" src="../../images/design/SyurwytfcvpbNLG.png">
                        </Card>
                    </div>
                    <div class="preview-image-title">推论邀请示例</div>
                    <div class="preview-image-description">用户点击『赞』后，同时系统分析（既然用户喜欢这篇文章，那么可能对这一类文章都有兴趣）并提供开启『精打细算』的邀请。</div>
                    </Col>
                </Row>
                </Col>
            </Row>
            <Row type="flex">
                <Col class-name="design-label-boxs">
                <p>更多内容邀请：用于邀请用户查看更多内容。</p>
                </Col>
                <Col class-name="design-img-boxs">
                <Row>
                    <Col span="24">
                    <div class="design-img-bg">
                        <Card :bordered="false">
                            <img class="design-img" src="../../images/design/sOqYOydwQjLHqph.png">
                        </Card>
                    </div>
                    <div class="preview-image-title">更多内容邀请示例</div>
                    <div class="preview-image-description">在 Modal 中会出现前后切换的箭头。</div>
                    </Col>
                </Row>
                </Col>
            </Row>
        </article>
    </i-article>
</template>

<script>
    import iArticle from '../../components/article.vue';
    import iCode from 'iCode';
    import Demo from '../../components/demo.vue';
    import Code from '../../code/layout';
    import Anchor from '../../components/anchor.vue';
    
    export default {
        components: {
            iArticle,
            iCode,
            Demo,
            Anchor
        },
        data() {
            return {
                code: Code,
                spanLeft: 5,
                spanRight: 19
            }
        },
        computed: {
            iconSize() {
                return this.spanLeft === 5 ? 14 : 24;
            }
        },
        methods: {
            toggleClick() {
                if (this.spanLeft === 5) {
                    this.spanLeft = 2;
                    this.spanRight = 22;
                } else {
                    this.spanLeft = 5;
                    this.spanRight = 19;
                }
            }
        }
    }
</script>