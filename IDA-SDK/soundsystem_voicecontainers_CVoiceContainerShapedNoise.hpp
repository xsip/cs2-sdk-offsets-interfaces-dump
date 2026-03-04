#pragma once
#include "enums.hpp"
#include "typedefs.hpp"

class soundsystem_voicecontainers_CVoiceContainerAnalysisBase;
#include "soundsystem_voicecontainers_CVSound.hpp"

class soundsystem_voicecontainers_CVoiceContainerShapedNoise {
    void **__vftable_0;
    void **__vftable_1;
    void **__vftable_2;
    void **__vftable_3;
    void **__vftable_4;
    soundsystem_voicecontainers_CVSound m_vSound;
    soundsystem_voicecontainers_CVoiceContainerAnalysisBase* m_pEnvelopeAnalyzer;
    bool m_bUseCurveForFrequency;
    char pad_500[0x3];
    float32 m_flFrequency;
    CPiecewiseCurve m_frequencySweep;
    bool m_bUseCurveForResonance;
    char pad_501[0x3];
    float32 m_flResonance;
    CPiecewiseCurve m_resonanceSweep;
    bool m_bUseCurveForAmplitude;
    char pad_502[0x3];
    float32 m_flGainInDecibels;
    CPiecewiseCurve m_gainSweep;
};
