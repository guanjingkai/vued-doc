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
            <h1>重复</h1>
            <p>相同的元素在整个界面中不断重复，不仅可以有效降低用户的学习成本，也可以帮助用户识别出这些元素之间的关联性。</p>
            <Anchor title="重复元素" h2></Anchor>
            <Row type="flex">
                <Col class-name="design-label-boxs">
                <p>重复元素可以是一条粗线、一种线框，某种相同的颜色、设计要素、设计风格，某种格式、空间关系等。</p>
                </Col>
                <Col class-name="design-img-boxs">
                <Row>
                    <Col span="24">
                    <div class="design-img-bg">
                        <Card :bordered="false">
                            <img class="design-img" src="../../images/design/SREcKOUMmiWPQNO.png">
                        </Card>
                    </div>
                    <div class="preview-image-title">推荐示例</div>
                    <div class="preview-image-description"></div>
                    </Col>
                </Row>
                <Row>
                    <Col span="24">
                    <div class="design-img-bg">
                        <Card :bordered="false">
                            <img class="design-img" src="../../images/design/ZjFUWyPHGzyQJYD.png">
                        </Card>
                    </div>
                    <div class="preview-image-title">推荐示例</div>
                    <div class="preview-image-description"></div>
                    </Col>
                </Row>
                <Row>
                    <Col span="24">
                    <div class="design-img-bg">
                        <Card :bordered="false">
                            <img class="design-img" src="../../images/design/mveDxAdjucdJDll.png">
                        </Card>
                    </div>
                    <div class="preview-image-title">推荐示例</div>
                    <div class="preview-image-description"></div>
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