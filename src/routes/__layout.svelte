<script type="ts">
    import TopAppBar, {Row, Section, Title} from '@smui/top-app-bar';
    import IconButton, {Icon} from '@smui/icon-button';
    import Button, {Label} from '@smui/button';
    import {Svg} from '@smui/common/elements';
    import GithubIcon from '/static/github-circle-white-transparent.svg';


    let prominent = false;
    let dense = false;
    let secondaryColor = false;
    let clicked = 0;

</script>

<TopAppBar variant="static" color="primary">
    <Row>
        <Section>
            <IconButton class="material-icons">menu</IconButton>

            <!--<Title>tulio.org</Title>-->
            <IconButton class="material-icons" aria-label="Download" href="/" title="Home">home</IconButton>

            <IconButton class="material-icons" aria-label="Download" href="/blog" title="Blog">article</IconButton>
            <IconButton class="material-icons" aria-label="Print this page" href="/programming" title="Programming">laptop_chromebook</IconButton>
        </Section>
        <Section align="end" toolbar>

            <Button color="primary" on:click={() => window.open('https://github.com/tulior/tulio.org')}>
                <Icon component={Svg} viewBox="0 0 24 24">
                    <path d="M10 0C4.477 0 0 4.477 0 10c0 4.42 2.87 8.17 6.84 9.5.5.08.66-.23.66-.5v-1.69c-2.77.6-3.36-1.34-3.36-1.34-.46-1.16-1.11-1.47-1.11-1.47-.91-.62.07-.6.07-.6 1 .07 1.53 1.03 1.53 1.03.87 1.52 2.34 1.07 2.91.83.09-.65.35-1.09.63-1.34-2.22-.25-4.55-1.11-4.55-4.92 0-1.11.38-2 1.03-2.71-.1-.25-.45-1.29.1-2.64 0 0 .84-.27 2.75 1.02.79-.22 1.65-.33 2.5-.33.85 0 1.71.11 2.5.33 1.91-1.29 2.75-1.02 2.75-1.02.55 1.35.2 2.39.1 2.64.65.71 1.03 1.6 1.03 2.71 0 3.82-2.34 4.66-4.57 4.91.36.31.69.92.69 1.85V19c0 .27.16.59.67.5C17.14 18.16 20 14.42 20 10A10 10 0 0 0 10 0z"
                          fill="#FFF" fill-rule="evenodd"/>
                </Icon>
                <Label>GitHub</Label>
            </Button>

        </Section>
    </Row>
</TopAppBar>

<slot></slot>
