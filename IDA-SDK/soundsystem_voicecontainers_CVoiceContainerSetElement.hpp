#pragma once
#include "enums.hpp"
#include "typedefs.hpp"

#include "soundsystem_voicecontainers_CSoundContainerReference.hpp"

class soundsystem_voicecontainers_CVoiceContainerSetElement {
    soundsystem_voicecontainers_CSoundContainerReference m_sound;
    float32 m_flVolumeDB;
    char end_pad_491[0x4];
};
