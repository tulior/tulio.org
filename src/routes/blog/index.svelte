<script type="ts">
    import Button, {Label} from '@smui/button';
</script>

<Button on:click={() => (open = !open)}>
    <Label>Toggle Drawer</Label>
</Button>
<br />
<pre class="status">Active: true</pre>
<div style="height: 700px;">&nbsp;</div>
And some stuff at the bottom.
