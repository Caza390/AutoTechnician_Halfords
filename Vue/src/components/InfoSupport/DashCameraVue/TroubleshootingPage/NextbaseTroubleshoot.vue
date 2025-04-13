<script setup lang="ts">
</script>

<template>
    <div class="absolute top-8 right-6">
        <RouterLink to="/dash-camera-info-support/troubleshooting"
            class="bg-red-500 px-4 py-2 rounded-lg shadow-md hover:bg-red-700">
            Return
        </RouterLink>
    </div>

    <main class="grid items-center justify-center p-20">
        <h1 class="text-6xl font-bold bg-black bg-opacity-20 rounded-lg p-2 text-halfords-orange-400">Nextbase
            Troubleshooting
        </h1>
        <div class="my-2">
            <h2 class="text-xl font-bold mb-1">Issue 1: No Power (while car is off)</h2>
            <p>If you installed the dashcamera to the car via a permant live (batt) but there is no power to the camera
                there are ways you can check to see the cause of proble<br>
                Firstly check the little black box that is attached to the hardwire kit. There should be an area that
                displays a little blue light either flashing or static. If the light is not on then the problem could be
                caused by low battery valtage, poor ground or impropper fuse tap installation. If the box is lit then
                there could be a fault in the wire somewhere from the box to the camera, problem with the GPS mount or
                the camera itself<br>
                If there is no power to the box you want to make sure your ground is in a good gounding spot using your
                multimeter tool set on 200 ohms. If this is all good the next step is to check your fuse tap. Using the
                Multimeter set to 20 dv voltage, check to see if there is power coming from the fuse tap itself. While
                you check for this also look at your multimeter and see if the car is producing at least a minimum of
                12v. Anything less will not power the hardwire kit. If all else fails, try a new hardwire kit<br>
                So the blue light is flashing or staying on but there is no power, this could be one of three ways.
                First check to see if it's the GPS mount. You can easily do this by unplugging the cable from the mount
                and plugging it directly into the top of the camera. If the camera powers on, the mound it faulty. If
                the camera doesn't power on then the next step is to check the camera works. A quick way to do this is
                to use the standard 12v accessory port (cigarette port) cable and see if that powers on the camera. If
                it does then the hardwire is faulty. If not then the camera is faulty and would need to be replaced'</p>
        </div>

        <div class="my-2">
            <h2 class="text-xl font-bold mb-1">Issue 2: Restart Loop (SD Fault)</h2>
            <p>One of the common issues with the Nextbase is due to user error of not formatting the SD card. This can
                result in a restart loop.<br>
                First test to see if this is the issue but removing the SD card (and rear camera if one is presant).<br>
                Press the "restart" button commonly located on the bottom of the camera.<br>
                Add the SD Card back into the camera and power it on, then add the rear camera if one was included.<br>
                If the camera falls into a loop then the SD card has failed. There might be a small chance to recover
                the SD card by formatting it on a PC or laptop but the issue may occur again and the customer is off
                getting a new replacement on their own expense</p>
        </div>
    </main>
</template>
