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
        padding-right: 16px;
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
            <h1>即时反应</h1>
            <p>『提供邀请』的强大体现在交互之前给出反馈，解决易发现性问题；『巧用过渡』的有用体现在它能够在交互期间为用户提供视觉反馈；『即时反应』的重要性体现在
                <Tag>交互之后</Tag>立即给出反馈。</p>
            <p>就像『牛顿第三定律』所描述作用力和反作用一样，用户进行了操作或者内部数据发生了变化，系统就应该立即有一个对应的反馈，同时输入量级越大、重要性越高，那么反馈量级越大、重要性越高。</p>
            <p>虽然反馈太多（准确的说，错误的反馈太多）是一个问题，但是反馈太少甚至没有反馈的系统，则让人感觉迟钝和笨拙，用户体验更差。</p>
            <Alert>牛顿第三定律 ：当两个物体互相作用时，彼此施加于对方的力，其大小相等、方向相反。——摘自《维基百科》</Alert>
            <Anchor title="查询模式" h2></Anchor>
            <Row type="flex">
                <Col class-name="design-label-boxs">
                <p>自动完成：用户输入时，下拉列表会随着输入的关键词显示匹配项。 根据查询结果分类的多少，可以分为『确定类目』、『不确定类目』两种类型。</p>
                </Col>
                <Col class-name="design-img-boxs">
                <Row>
                    <Col span="24">
                    <div class="design-img-bg">
                        <Card :bordered="false">
                            <img class="design-img" src="../../images/design/fgQfkNakHrUiAun.png">
                        </Card>
                    </div>
                    <div class="preview-image-title">确定类目示例</div>
                    <div class="preview-image-description">用户所查询的关键词，只会在『话题』、『问题』、『文章』这 3 种类目中出现。</div>
                    </Col>
                </Row>
                <Row>
                    <Col span="24">
                    <div class="design-img-bg">
                        <Card :bordered="false">
                            <img class="design-img" src="../../images/design/hUfCsXwnOsVlskl.png">
                        </Card>
                    </div>
                    <div class="preview-image-title">不确定类目示例</div>
                    <div class="preview-image-description">用户所查询的关键词，其所属的类目数量不确定，可能 4 个，可能 5 个，可能更多。</div>
                    </Col>
                </Row>
                </Col>
            </Row>
            <Row type="flex">
                <Col class-name="design-label-boxs">
                <p>实时搜索：随着用户输入，实时显示搜索结果。『自动完成』、『实时建议』的近亲。</p>
                </Col>
                <Col class-name="design-img-boxs">
                <Row>
                    <Col span="24">
                    <div class="design-img-bg">
                        <Card :bordered="false">
                            <img class="design-img" src="../../images/design/OyJCVmOigyXKWCf.png">
                        </Card>
                    </div>
                    <div class="preview-image-title">实时搜索示例</div>
                    <div class="preview-image-description">用户输入一个搜索值，系统随即显示查询结果。
                    </div>
                    </Col>
                </Row>
                </Col>
            </Row>
            <hr class="design-hr">
            <Anchor title="反馈模式" h2></Anchor>
            <Row type="flex">
                <Col class-name="design-label-boxs">
                <p>实时预览：在用户提交输入之前，让他先行了解系统将如何处理他的输入。</p>
                <Alert>注：解决错误最好的办法，就是不让错误发生。而『实时预览』就是有效避免错误的好设计。</Alert>
                </Col>
                <Col class-name="design-img-boxs">
                <Row>
                    <Col span="24">
                    <div class="design-img-bg">
                        <Card :bordered="false">
                            <img class="design-img" src="../../images/design/jecYhRgfbHleGDJ.png">
                        </Card>
                    </div>
                    <div class="preview-image-title">实时预览示例</div>
                    <div class="preview-image-description">根据用户的输入，提供关于密码强度和有效性的实时反馈。
                    </div>
                    </Col>
                </Row>
                </Col>
            </Row>
            <p>渐进式展现：在必要的时候提供必要的提示，而不是一股脑儿显示所有提示，导致界面混乱，增加认知负担。案例详见『足不出户／渐进式展现』。</p>
            <Row type="flex">
                <Col class-name="design-label-boxs">
                <p>进度指示：当一个操作需要一定时间完成时，就需要即时告知进度，保持与用户的沟通。 常见的进度指示：『按钮加载』、『表格加载』、『富列表加载』、『页面加载』。可根据操作的量级和重要性，展示不同类型的进度指示。</p>
                </Col>
                <Col class-name="design-img-boxs">
                <Row>
                    <Col span="24">
                    <div class="design-img-bg">
                        <Card :bordered="false">
                            <img class="design-img" src="../../images/design/FBAZGqfeUnDlUtw.png">
                        </Card>
                    </div>
                    <div class="preview-image-title">按钮加载示例</div>
                    <div class="preview-image-description"></div>
                    </Col>
                </Row>
                <Row>
                    <Col span="24">
                    <div class="design-img-bg">
                        <Card :bordered="false">
                            <img class="design-img" src="../../images/design/FPXsINbTgsuSStI.png">
                        </Card>
                    </div>
                    <div class="preview-image-title">表格加载示例</div>
                    <div class="preview-image-description"></div>
                    </Col>
                </Row>
                <Row>
                    <Col span="24">
                    <div class="design-img-bg">
                        <Card :bordered="false">
                            <img class="design-img" src="../../images/design/WJqeUHzthTXaHnW.png">
                        </Card>
                    </div>
                    <div class="preview-image-title">富列表加载示例</div>
                    <div class="preview-image-description"></div>
                    </Col>
                </Row>
                <Row>
                    <Col span="24">
                    <div class="design-img-bg">
                        <Card :bordered="false">
                            <img class="design-img" src="../../images/design/qPWjexSmFfCiLVJ.png">
                        </Card>
                    </div>
                    <div class="preview-image-title">页面加载示例</div>
                    <div class="preview-image-description"></div>
                    </Col>
                </Row>
                </Col>
            </Row>
            <Row type="flex">
                <Col class-name="design-label-boxs">
                <p>点击刷新：告知用户有新内容，并提供按钮等工具帮助用户查看新内容。。</p>
                </Col>
                <Col class-name="design-img-boxs">
                <Row>
                    <Col span="24">
                    <div class="design-img-bg">
                        <Card :bordered="false">
                            <img class="design-img" src="../../images/design/DdmWqoqIFSCSAvq.png">
                        </Card>
                    </div>
                    <div class="preview-image-title">点击刷新示例</div>
                    <div class="preview-image-description"></div>
                    </Col>
                </Row>
                </Col>
            </Row>
            <Row type="flex">
                <Col class-name="design-label-boxs">
                <p>定时刷新：无需用户介入，定时展示新内容。</p>
                </Col>
                <Col class-name="design-img-boxs">
                <Row>
                    <Col span="24">
                    <div class="design-img-bg">
                        <Card :bordered="false">
                            <img class="design-img" src="../../images/design/guiuShsfpJzxZQx.png">
                        </Card>
                    </div>
                    <div class="preview-image-title">定时示例</div>
                    <div class="preview-image-description">新增的列表项『高亮』，持续几秒后恢复正常。</div>
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