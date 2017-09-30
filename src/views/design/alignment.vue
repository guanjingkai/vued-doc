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
            <h1>对齐</h1>
            <p>正如『格式塔学派』中的连续律（Law of Continuity）所描述的，在知觉过程中人们往往倾向于使知觉对象的直线继续成为直线，使曲线继续成为曲线。在界面设计中，将元素进行对齐，既符合用户的认知特性，也能引导视觉流向，让用户更流畅地接收信息。</p>
            <Alert>格式塔学派（德语：Gestalttheorie） ：是心理学重要流派之一，兴起于 20 世纪初的德国，又称为完形心理学；主张人脑的运作原理是整体的，『整体不同于其部件的总和』。——摘自『维基百科』</Alert>
            <Anchor title="文案类对齐" h2></Anchor>
            <Row type="flex">
                <Col class-name="design-label-boxs">
                <p>如果页面的字段或段落较短、较散时，需要确定一个统一的视觉起点。</p>
                </Col>
                <Col class-name="design-img-boxs">
                <Row>
                    <Col span="12">
                    <div class="design-img-bg design-img-good">
                        <Card :bordered="false">
                            <img class="design-img" src="../../images/design/xvmiAZAIxrEcqdP.png">
                        </Card>
                    </div>
                    <div class="preview-image-title">推荐示例</div>
                    <div class="preview-image-description">标题和正文左对齐，使用了一个视觉起点。</div>
                    </Col>
                    <Col span="12">
                    <div class="design-img-bg design-img-error">
                        <Card :bordered="false">
                            <img class="design-img" src="../../images/design/qvycImsTiDGVgLJ.png">
                        </Card>
                    </div>
                    <div class="preview-image-title">不推荐示例</div>
                    <div class="preview-image-description">标题和正文使用了两个视觉起点，不推荐该种对齐方式，除非刻意强调两者区别。</div>
                    </Col>
                </Row>
                </Col>
            </Row>
            <hr class="design-hr">
            <Anchor title="表单对齐" h2></Anchor>
            <Row type="flex">
                <Col class-name="design-label-boxs">
                <p>冒号对齐（右对齐）能让内容锁定在一定范围内，让用户眼球顺着冒号的视觉流，就能找到所有填写项，从而提高填写效率。</p>
                </Col>
                <Col class-name="design-img-boxs">
                <Row>
                    <Col span="24">
                    <div class="design-img-bg">
                        <Card :bordered="false">
                            <img class="design-img" src="../../images/design/DmEbaUsrpJkRyUh.png">
                        </Card>
                    </div>
                    <div class="preview-image-title">冒号对齐示例</div>
                    <div class="preview-image-description"></div>
                    </Col>
                </Row>
                </Col>
            </Row>
            <Anchor title="数字类对齐" h2></Anchor>
            <Row type="flex">
                <Col class-name="design-label-boxs">
                <p>为了快速对比数值大小，建议所有数值取相同有效位数，并且右对齐。</p>
                </Col>
                <Col class-name="design-img-boxs">
                <Row>
                    <Col span="12">
                    <div class="design-img-bg design-img-good">
                        <Card :bordered="false">
                            <img class="design-img" src="../../images/design/hCSQTEmahFyQcWk.png">
                        </Card>
                    </div>
                    <div class="preview-image-title">推荐示例</div>
                    <div class="preview-image-description"></div>
                    </Col>
                    <Col span="12">
                    <div class="design-img-bg design-img-error">
                        <Card :bordered="false">
                            <img class="design-img" src="../../images/design/FDjScmPlWFPxkxL.png">
                        </Card>
                    </div>
                    <div class="preview-image-title">不推荐示例</div>
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