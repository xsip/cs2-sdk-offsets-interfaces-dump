#pragma once
#include "enums.hpp"
#include "typedefs.hpp"

class soundsystem_voicecontainers_CVoiceContainerAnalysisBase;
#include "soundsystem_voicecontainers_CVSound.hpp"

class soundsystem_voicecontainers_CVoiceContainerTapePlayer {
    void **__vftable_0;
    void **__vftable_1;
    void **__vftable_2;
    void **__vftable_3;
    void **__vftable_4;
    soundsystem_voicecontainers_CVSound m_vSound;
    soundsystem_voicecontainers_CVoiceContainerAnalysisBase* m_pEnvelopeAnalyzer;
    char pad_483[0x10];
    bool m_bShouldWraparound;
    char pad_507[0x7];
    char m_sourceAudio[0x8];
    float32 m_flTapeSpeedAttackTime;
    float32 m_flTapeSpeedReleaseTime;
    char end_pad_508[0x28];
};
