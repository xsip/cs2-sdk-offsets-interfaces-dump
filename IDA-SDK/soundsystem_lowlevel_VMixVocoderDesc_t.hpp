#pragma once
#include "enums.hpp"
#include "typedefs.hpp"


class soundsystem_lowlevel_VMixVocoderDesc_t {
    int32_t m_nBandCount;
    float32 m_flBandwidth;
    float32 m_fldBModGain;
    float32 m_flFreqRangeStart;
    float32 m_flFreqRangeEnd;
    float32 m_fldBUnvoicedGain;
    float32 m_flAttackTimeMS;
    float32 m_flReleaseTimeMS;
    int32_t m_nDebugBand;
    bool m_bPeakMode;
    char end_pad_2468[0x3];
};
