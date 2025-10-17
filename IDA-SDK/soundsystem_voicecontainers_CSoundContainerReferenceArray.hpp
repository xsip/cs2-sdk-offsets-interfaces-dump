#pragma once
#include "enums.hpp"
#include "typedefs.hpp"


class soundsystem_voicecontainers_CSoundContainerReferenceArray {
    bool m_bUseReference;
    char pad_490[0x7];
    char m_sounds[0x18];
    char m_pSounds[0x18];
};
