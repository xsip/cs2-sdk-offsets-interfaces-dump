#pragma once
#include "enums.hpp"
#include "typedefs.hpp"

class soundsystem_voicecontainers_CVoiceContainerBase;

class soundsystem_voicecontainers_CSoundContainerReference {
    bool m_bUseReference;
    char pad_478[0x7];
    char m_sound[0x8];
    soundsystem_voicecontainers_CVoiceContainerBase* m_pSound;
};
