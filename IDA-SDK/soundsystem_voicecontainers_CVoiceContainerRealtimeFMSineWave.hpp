#pragma once
#include "enums.hpp"
#include "typedefs.hpp"

class soundsystem_voicecontainers_CVoiceContainerAnalysisBase;
#include "soundsystem_voicecontainers_CVSound.hpp"

class soundsystem_voicecontainers_CVoiceContainerRealtimeFMSineWave {
    char vTable474[0x38];
    soundsystem_voicecontainers_CVSound m_vSound;
    soundsystem_voicecontainers_CVoiceContainerAnalysisBase* m_pEnvelopeAnalyzer;
    float32 m_flCarrierFrequency;
    float32 m_flModulatorFrequency;
    float32 m_flModulatorAmount;
    char end_pad_487[0x4];
};
