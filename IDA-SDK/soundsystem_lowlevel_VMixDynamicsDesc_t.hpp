#pragma once
#include "enums.hpp"
#include "typedefs.hpp"


class soundsystem_lowlevel_VMixDynamicsDesc_t {
    float32 m_fldbGain;
    float32 m_fldbNoiseGateThreshold;
    float32 m_fldbCompressionThreshold;
    float32 m_fldbLimiterThreshold;
    float32 m_fldbKneeWidth;
    float32 m_flRatio;
    float32 m_flLimiterRatio;
    float32 m_flAttackTimeMS;
    float32 m_flReleaseTimeMS;
    float32 m_flRMSTimeMS;
    float32 m_flWetMix;
    bool m_bPeakMode;
    char end_pad_2464[0x3];
};
