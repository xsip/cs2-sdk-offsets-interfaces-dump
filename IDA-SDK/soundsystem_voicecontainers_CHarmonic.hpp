#pragma once
#include "enums.hpp"
#include "typedefs.hpp"

#include "soundsystem_voicecontainers_CGainScalePerInstance.hpp"

class soundsystem_voicecontainers_CHarmonic {
    soundsystem_voicecontainers_EWaveform m_nWaveform;
    soundsystem_voicecontainers_EMidiNote m_nFundamental;
    char pad_496[0x2];
    int32_t m_nOctave;
    float32 m_flCents;
    float32 m_flPhase;
    CPiecewiseCurve m_curve;
    soundsystem_voicecontainers_CGainScalePerInstance m_volumeScaling;
    char end_pad_497[0x8];
};
