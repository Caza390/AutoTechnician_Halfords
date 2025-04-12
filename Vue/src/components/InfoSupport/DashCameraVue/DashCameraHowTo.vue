<script setup lang="ts">
</script>

<template>
  <div class="absolute top-8 right-6">
    <RouterLink to="/dash-camera-info-support" class="bg-red-500 px-4 py-2 rounded-lg shadow-md hover:bg-red-700">
      Return
    </RouterLink>
  </div>

  <main class="grid items-center justify-center p-20">
    <div class="mb-4">
      <h1 class="text-6xl font-bold bg-black bg-opacity-20 rounded-lg p-2 text-halfords-orange-400">Front Camera Install
      </h1>
      <div class="my-2">
        <h2 class="text-xl font-bold mb-1">Step One: Selecting the right harness</h2>
        <p>There are different types of harnesses for each brand with some slight changes per model. Checking and
          selecting
          the right harness in preperation for the job will help save time and make your working life more
          convinient.<br>
          Some cameras like the Nextbase IQ or BlackVue provide their own harnesses where as brands like Road Angel are
          specific to the models<br>
          Nextbase: Fuse or OBD (ideal for Hybrid or EVs). Road Angel: Ultra/Play (Ultra, Play, Drive 2 and Vision 2),
          Halo
          Pro, Go & Drive. BlackVue: Self provided or Conecta OBD (ideal for Hybrid or EVs). Garmin: Parking mode cable
          (USB-C and Micro USB)<br>
          Lastly for kits like the Nextbase Hardwire, it is easier to cut the ground end off and install the ring
          elecrial
          connecton and tape it securely.</p>
      </div>

      <div class="my-2">
        <h2 class="text-xl font-bold mb-1">Step Two: Locate the ground</h2>
        <p>Grab your Multimeter and set it to 200 Ohms. Using one prong on a good ground spot (door lach or chassi) and
          touching the other prong on a bolt, nut or screw, you should see the number change. This tells you that you
          have
          a
          good ground. Avoid using a grounding spot with wires already connecting to it!<br>
          Sometimes, depending on the grounding area, a washer is best placed inbetween to prevent difficulty or issues
          when
          grounding the Hardwire kit</p>
      </div>

      <div class="my-2">
        <h2 class="text-xl font-bold mb-1">Step Three: Locate the fuse/OBD port</h2>
        <p>Firstly if you're working on a Hybrid or EV it is best practice to use OBD style Hardwire Kit. This reduces
          issues during the installation process. OBDs are commonly found near the drivers side with the occasional
          passenger side<br>
          If you're going for the fuse method, you'll commonly find the fuse box on the passenger side behind or under
          the
          glovebox. If not it'll either be located under the carpet, below the A-pillar by the dash, driver side or in
          the
          boot<br>
          Now it's time to find which fuse to use. Using a Multimeter set to the 20 DC Voltage, place one prong to a
          ground
          and the other on the fuses. Ideally you want to use either an empty spot or comfort options - NOT important
          functions like Airbag and lights. With the nextbase hardwire, preferbly use a Permanate Live (Batt) if Parking
          Mode is an option. If Parking mode isn't an option or upon customer request use an ignition live (Acc). For
          kits
          that have both a Yellow (Batt) and Red (Acc) cable, you will need to use both Permanate (Batt) and Ingition
          (Acc).<br>
          If you notice the vehicles voltage is less than 12v using the Multimeter, you might find the camera will not
          power
          on while the vehicle is off, this is becasue the hardwire settings are set to not take charge once the car
          voltage drops
          below a specific rate</p>
      </div>

      <div class="my-2">
        <h2 class="text-xl font-bold mb-1">Step Four: Cable routing</h2>
        <p>route the cable up the A-Pillar and behind the Airbags. You do not want to cross over the Airbag. If
          provided,
          you can use OEM cable management as a guide and cable tie your wires to them. If there are no wires, you can
          use
          cable tie adhesive to help secure the wires to the A-Pillar.</p>
      </div>

      <div class="my-2">
        <h2 class="text-xl font-bold mb-1">Step Five: Camera placement</h2>
        <p>Before you secure the cables in place and clean up your wires, it is best to get your camera in place. If
          applicable install the rear cable/cabin view to the camera before mounting up - this is to reduce issues of
          having
          to remove and reinstall the camera due to poor placement. You need to make sure this spot isn't a distractable
          spot for the driver, not in the way of the main window screen for both driver and passenger, in view of
          wiperblades and not in the way of the
          passengers sun visor. You can use electrical tape (preferbly fabric) to create a cleaner, more profressional
          look
          to the wires for vehicels like the C3 with panoramic windscreen</p>
      </div>

      <div class="my-2">
        <h2 class="text-xl font-bold mb-1">Step Six: Clean up the cable</h2>
        <p>Lastly to finish the install process, use electrical tape around the connection points between the fuse taps
          and
          wires for a secured and strong installation. Next using electrical tape and cable ties, secure and wrap up the
          wires correctly. If the wires are near the drivers side, tuck them and cable tie them out of reach from the
          pedals. These must be really secured as it can be a life threatening issue if installed incorrectly!</p>
      </div>
    </div>

    <div class="mt-4">
      <h1 class="text-6xl font-bold bg-black bg-opacity-20 rounded-lg p-2 text-halfords-orange-400">Rear Camera Install
      </h1>
      <div class="my-2">
        <h2 class="text-xl font-bold mb-1">Step One: Route cable to rear</h2>
        <p></p>
      </div>

      <div class="my-2">
        <h2 class="text-xl font-bold mb-1">Step Two:</h2>
        <p></p>
      </div>
    </div>
  </main>
</template>
