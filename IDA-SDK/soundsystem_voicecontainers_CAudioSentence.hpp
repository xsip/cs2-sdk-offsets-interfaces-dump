#pragma once
#include "enums.hpp"
#include "typedefs.hpp"

#include "soundsystem_voicecontainers_CAudioMorphData.hpp"

class soundsystem_voicecontainers_CAudioSentence {
    bool m_bShouldVoiceDuck;
    char pad_458[0x7];
    char m_RunTimePhonemes[0x18];
    char m_EmphasisSamples[0x18];
    soundsystem_voicecontainers_CAudioMorphData m_morphData;
};
