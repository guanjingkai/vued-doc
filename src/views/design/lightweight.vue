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
            <h1>简化交互</h1>
            <p>根据费茨法则（Fitts's Law）所描述的，如果用户鼠标移动距离越少、对象相对目标越大，那么用户越容易操作。通过运用上下文工具（即：放在内容中的操作工具），使内容和操作融合，从而简化交互。</p>
            <Alert>费茨法则 ：到达目标的时间是到达目标的距离与目标大小的函数，其中：1.设备当前位置和目标位置的距离（D）；2.目标的大小（W）。距离越长，所用时间越长；目标越大，所用时间越短。</Alert>
            <Anchor title="页内编辑" h2></Anchor>
            <Row type="flex">
                <Col class-name="design-label-boxs">
                <p>实时可见工具</p>
                <p>如果某个操作非常重要，就应该把它放在界面中，并实时可见。</p>
                </Col>
                <Col class-name="design-img-boxs">
                <Row>
                    <Col span="24">
                    <div class="design-img-bg">
                        <Card :bordered="false">
                            <img class="design-img" src="../../images/design/sfytaOSssRrdYFg.png">
                        </Card>
                    </div>
                    <div class="preview-image-title">实时可见工具示例 --摘自知乎</div>
                    <div class="preview-image-description">状态一：在文案中出现一个相对明显的点击区域；<br/>
状态二：鼠标悬停时，鼠标『指针』变为『手型』，底色发生变化，邀请用户点击。<br/>
状态三：鼠标点击后，和未点击前有明显的区分。
                    </div>
                    </Col>
                </Row>
                </Col>
            </Row>
            <hr class="design-hr">
            <Anchor title="利用拖放" h2>悬停即现工具</Anchor>
            <Row type="flex">
                <Col class-name="design-label-boxs">
                <p>如果某个操作不那么重要，或者使用『实时可见工具』过于啰嗦会影响用户阅读时，可以在悬停在该对象上时展示操作项。</p>
                </Col>
                <Col class-name="design-img-boxs">
                <Row>
                    <Col span="24">
                    <div class="design-img-bg">
                        <Card :bordered="false">
                            <img class="design-img" src="../../images/design/AUiWMlbxCvpBFyA.png">
                        </Card>
                    </div>
                    <div class="preview-image-title">悬停即现工具示例</div>
                    <div class="preview-image-description">鼠标悬停时，出现操作项。
                    </div>
                    </Col>
                </Row>
                </Col>
            </Row>
            <hr class="design-hr">
            <Anchor title="开关显示工具" h2></Anchor>
            <Row type="flex">
                <Col class-name="design-label-boxs">
                <p>如果某些操作只需要在特定模式时显示，可以通过开关来实现。</p>
                </Col>
                <Col class-name="design-img-boxs">
                <Row>
                    <Col span="24">
                    <div class="design-img-bg">
                        <Card :bordered="false">
                            <img class="design-img" src="../../images/design/uGWcpAFgWdynxBy.png">
                        </Card>
                    </div>
                    <div class="preview-image-title">开关显示工具示例</div>
                    <div class="preview-image-description">用户点击『修改』后，Table 中『文本』变成『输入框』，开启编辑功能。
                    </div>
                    </Col>
                </Row>
                </Col>
            </Row>
            <hr class="design-hr">
            <Anchor title="交互中的工具" h2></Anchor>
            <Row type="flex">
                <Col class-name="design-label-boxs">
                <p>如果操作不重要或者可以通过其他途径完成时，可以将工具放置在用户的操作流程中，减少界面元素，降低认知负担，给用户小惊喜。</p>
                <p>此处也可以运用『提供邀请』 相关的知识点。</p>
                </Col>
                <Col class-name="design-img-boxs">
                <Row>
                    <Col span="24">
                    <div class="design-img-bg">
                        <Card :bordered="false">
                            <img class="design-img" src="../../images/design/STvIHSgnVAHOVHl.png">
                        </Card>
                    </div>
                    <div class="preview-image-title">推荐示例</div>
                    <div class="preview-image-description">鼠标悬停时，出现 Tooltips 进行提示，用户点击内容直接复制。</div>
                    </Col>
                </Row>
                <Row>
                    <Col span="24">
                    <div class="design-img-bg">
                        <Card :bordered="false">
                            <img class="design-img" src="../../images/design/aRihOoBCQHGATBA.png">
                        </Card>
                    </div>
                    <div class="preview-image-title">推荐示例</div>
                    <div class="preview-image-description">鼠标滑选/双击时，系统自动复制该部分内容。通过大胆猜测用户的行为，并帮助完成，给用户小惊喜。</div>
                    </Col>
                </Row>
                <Row>
                    <Col span="24">
                    <div class="design-img-bg">
                        <Card :bordered="false">
                            <img class="design-img" src="../../images/design/MfbnQfAJhQfIODY.png">
                        </Card>
                    </div>
                    <div class="preview-image-title">不推荐示例</div>
                    <div class="preview-image-description">在可复制内容的附近出现『图标』，点击后复制。</div>
                    </Col>
                </Row>
                </Col>
            </Row>
             <hr class="design-hr">
            <Anchor title="可视区域 ≠ 可点击区域" h2></Anchor>
            <Row type="flex">
                <Col class-name="design-label-boxs">
                <p>在使用 Table 时，文字链的点击范围受到文字长短影响，可以设置整个单元格为热区，以便用户触发。</p>
                </Col>
                <Col class-name="design-img-boxs">
                <Row>
                    <Col span="24">
                    <div class="design-img-bg">
                        <Card :bordered="false">
                            <img class="design-img" src="../../images/design/bCrBxGPJiDvkyOH.png">
                        </Card>
                    </div>
                    <div class="preview-image-title">文字链热区示例</div>
                    <div class="preview-image-description">当悬浮在 ID 所在的文字链单元格时，鼠标『指针』随即变为『手型』，单击即可跳转。</div>
                    </Col>
                </Row>
                </Col>
            </Row>
            <Row type="flex">
                <Col class-name="design-label-boxs">
                <p>当需要增强按钮的响应性时，可以通过增加用户点击热区的范围，而不是增大按钮形状，从而增强响应性，又不缺失美感。</p>
                <Alert>注：在移动端尤其适用。</Alert>
                </Col>
                <Col class-name="design-img-boxs">
                <Row>
                    <Col span="24">
                    <div class="design-img-bg">
                        <Card :bordered="false">
                            <img class="design-img" src="../../images/design/dSehXwUuXDFDhJO.png">
                        </Card>
                    </div>
                    <div class="preview-image-title">按钮热区示例</div>
                    <div class="preview-image-description">鼠标移入按钮附近，即可激活 Hover 状态。</div>
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