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
            <h1>对比</h1>
            <p>对比是增加视觉效果最有效方法之一，同时也能在不同元素之间建立一种有组织的层次结构，让用户快速识别关键信息。</p>
            <Anchor title="主次关系对比" h2></Anchor>
            <Row type="flex">
                <Col class-name="design-label-boxs">
                <p>为了让用户能在操作上（类似表单、弹出框等场景）快速做出判断， 来突出其中一项相对更重要或者更高频的操作。</p>
                </Col>
                <Col class-name="design-img-boxs">
                <Row>
                    <Col span="12">
                    <div class="design-img-bg design-img-good">
                        <Card :bordered="false">
                            <img class="design-img" src="../../images/design/RruKZUSYEwauGdF.png">
                        </Card>
                    </div>
                    <div class="preview-image-title">推荐示例</div>
                    </Col>
                    <Col span="12">
                    <div class="design-img-bg design-img-error">
                        <Card :bordered="false">
                            <img class="design-img" src="../../images/design/TOupLSPNQkBTmYw.png">
                        </Card>
                    </div>
                    <div class="preview-image-title">不推荐示例</div>
                    </Col>
                </Row>
                </Col>
            </Row>
            <Row type="flex">
                <Col class-name="design-label-boxs">
                <p>在一些需要用户慎重决策的场景中，系统应该保持中立，不能替用户或者诱导用户做出判断。</p>
                </Col>
                <Col class-name="design-img-boxs">
                <Row>
                    <Col span="24">
                    <div class="design-img-bg">
                        <Card :bordered="false">
                            <img class="design-img" src="../../images/design/xskurfmyKPumFSv.png">
                        </Card>
                    </div>
                    <div class="preview-image-title">不区分主次的示例</div>
                    <div class="preview-image-description">『通过』和『驳回』都使用次按钮，系统保持中立。</div>
                    </Col>
                </Row>
                </Col>
            </Row>
            <hr class="design-hr">
            <Anchor title="总分关系对比" h2></Anchor>
            <Row type="flex">
                <Col class-name="design-label-boxs">
                <p>通过调整排版、字体、大小等方式来突出层次感，区分总分关系，使得页面更具张力和节奏感。</p>
                </Col>
                <Col class-name="design-img-boxs">
                <Row>
                    <Col span="24">
                    <div class="design-img-bg">
                        <Card :bordered="false">
                            <img class="design-img" src="../../images/design/HEDJpTyufnfXUOP.png">
                        </Card>
                    </div>
                    <div class="preview-image-title">总分关系示例 1</div>
                    <div class="preview-image-description"></div>
                    </Col>
                </Row>
                <Row>
                    <Col span="24">
                    <div class="design-img-bg">
                        <Card :bordered="false">
                            <img class="design-img" src="../../images/design/bafqoUWFgXjsuSG.png">
                        </Card>
                    </div>
                    <div class="preview-image-title">总分关系示例 2</div>
                    <div class="preview-image-description"></div>
                    </Col>
                </Row>
                </Col>
            </Row>
            <hr class="design-hr">
            <Anchor title="状态关系对比" h2></Anchor>
            <Row type="flex">
                <Col class-name="design-label-boxs">
                <p>通过改变颜色、增加辅助形状等方法来实现状态关系的对比，以便用户更好的区分信息。</p>
                <p>常见类型有『静态对比』、『动态对比』。</p>
                </Col>
                <Col class-name="design-img-boxs">
                <Row>
                    <Col span="24">
                    <div class="design-img-bg">
                        <Card :bordered="false">
                            <img class="design-img" src="../../images/design/UHjarNwxrXndznP.png">
                        </Card>
                    </div>
                    <div class="preview-image-title">静态对比示例</div>
                    <div class="preview-image-description">用不同颜色点，来表明不同状态。</div>
                    </Col>
                </Row>
                <Row>
                    <Col span="24">
                    <div class="design-img-bg">
                        <Card :bordered="false">
                            <img class="design-img" src="../../images/design/DCAtXAEaFnAXEmG.png">
                        </Card>
                    </div>
                    <div class="preview-image-title">动态对比示例</div>
                    <div class="preview-image-description">鼠标悬停时，该项和其他项呈现出明显不同的视觉效果，响应用户操作。</div>
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