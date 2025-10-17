#pragma once
#include "enums.hpp"
#include "typedefs.hpp"

#include "soundsystem_lowlevel_VMixDynamicsBand_t.hpp"

class soundsystem_lowlevel_VMixDynamics3BandDesc_t {
    float32 m_fldbGainOutput;
    float32 m_flRMSTimeMS;
    float32 m_fldbKneeWidth;
    float32 m_flDepth;
    float32 m_flWetMix;
    float32 m_flTimeScale;
    float32 m_flLowCutoffFreq;
    float32 m_flHighCutoffFreq;
    bool m_bPeakMode;
    char pad_2461[0x3];
    soundsystem_lowlevel_VMixDynamicsBand_t m_bandDesc[3];
};
