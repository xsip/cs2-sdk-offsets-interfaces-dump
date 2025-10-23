#pragma once
#include "enums.hpp"
#include "typedefs.hpp"

#include "soundsystem_lowlevel_VMixDynamicsBand_t.hpp"

class soundsystem_lowlevel_VMixDualCompressorDesc_t {
    float32 m_flRMSTimeMS;
    float32 m_fldbKneeWidth;
    float32 m_flWetMix;
    bool m_bPeakMode;
    char pad_2458[0x3];
    soundsystem_lowlevel_VMixDynamicsBand_t m_bandDesc;
};
