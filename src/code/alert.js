let code = {};

code.base = `
<template>
    <Alert>消息提示文案</Alert>
    <Alert type="success">成功提示文案</Alert>
    <Alert type="warning">警告提示文案</Alert>
    <Alert type="error">错误提示文案</Alert>
</template>
<script>
    export default {
        
    }
</script>
`;

code.desc = `
<template>
    <Alert>
        消息提示文案
        <template slot="desc">消息提示的描述文案消息提示的描述文案消息提示的描述文案消息提示的描述文案消息提示的描述文案</template>
    </Alert>
    <Alert type="success">
        成功提示文案
        <span slot="desc">成功的提示描述文案成功的提示描述文案成功的提示描述文案成功的提示描述文案成功的提示描述文案</span>
    </Alert>
    <Alert type="warning">
        警告提示文案
        <template slot="desc">
            警告的提示描述文案警告的提示描述文案警告的提示描述文案
        </template>
    </Alert>
    <Alert type="error">
        错误提示文案
        <span slot="desc">
            自定义错误描述文案。<Icon type="help-circled" size="14"></Icon>
        </span>
    </Alert>
</template>
<script>
    export default {
        
    }
</script>
`;

code.icon = `
<template>
    <Alert show-icon>消息提示文案</Alert>
    <Alert type="success" show-icon>成功提示文案</Alert>
    <Alert type="warning" show-icon>警告提示文案</Alert>
    <Alert type="error" show-icon>错误提示文案</Alert>
    <Alert show-icon>
        消息提示文案
        <template slot="desc">消息提示的描述文案消息提示的描述文案消息提示的描述文案消息提示的描述文案消息提示的描述文案</template>
    </Alert>
    <Alert type="success" show-icon>
        成功提示文案
        <span slot="desc">成功的提示描述文案成功的提示描述文案成功的提示描述文案成功的提示描述文案成功的提示描述文案</span>
    </Alert>
    <Alert type="warning" show-icon>
        警告提示文案
        <template slot="desc">
            警告的提示描述文案警告的提示描述文案警告的提示描述文案
        </template>
    </Alert>
    <Alert type="error" show-icon>
        错误提示文案
        <span slot="desc">
            自定义错误描述文案。
        </span>
    </Alert>
    <Alert show-icon>
        自定义图标
        <Icon type="ios-lightbulb-outline" slot="icon"></Icon>
        <template slot="desc">自定义图标文案自定义图标文案自定义图标文案自定义图标文案自定义图标文案</template>
    </Alert>
</template>
<script>
    export default {
        
    }
</script>
`;

code.close = `
<template>
    <Alert closable>消息提示文案</Alert>
    <Alert type="success" show-icon closable>
        成功提示文案
        <span slot="desc">成功的提示描述文案成功的提示描述文案成功的提示描述文案成功的提示描述文案成功的提示描述文案</span>
    </Alert>
    <Alert type="warning" closable>
        自定义关闭内容
        <span slot="close">不再提示</span>
    </Alert>
</template>
<script>
    export default {
        
    }
</script>
`;

code.banner = `
<template>
    <Alert banner type="warning">通知：通知内容。。。</Alert>
    <Alert banner closable type="warning">通知：通知内容。。。</Alert>
</template>
<script>
    export default {
        
    }
</script>
`;

export default code;