#pragma once
#include "enums.hpp"
#include "typedefs.hpp"

class soundsystem_voicecontainers_CVoiceContainerAnalysisBase;
#include "soundsystem_voicecontainers_CVSound.hpp"

class soundsystem_voicecontainers_CVoiceContainerShapedNoise {
    char vTable474[0x38];
    soundsystem_voicecontainers_CVSound m_vSound;
    soundsystem_voicecontainers_CVoiceContainerAnalysisBase* m_pEnvelopeAnalyzer;
    bool m_bUseCurveForFrequency;
    char pad_492[0x3];
    float32 m_flFrequency;
    CPiecewiseCurve m_frequencySweep;
    bool m_bUseCurveForResonance;
    char pad_493[0x3];
    float32 m_flResonance;
    CPiecewiseCurve m_resonanceSweep;
    bool m_bUseCurveForAmplitude;
    char pad_494[0x3];
    float32 m_flGainInDecibels;
    CPiecewiseCurve m_gainSweep;
};
