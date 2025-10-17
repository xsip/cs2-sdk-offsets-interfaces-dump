#pragma once
#include "enums.hpp"
#include "typedefs.hpp"

#include "soundsystem_lowlevel_VMixFilterDesc_t.hpp"

class soundsystem_lowlevel_VMixBoxverb2Desc_t {
    float32 m_flSizeMax;
    float32 m_flSizeMin;
    float32 m_flComplexity;
    float32 m_flDiffusion;
    float32 m_flModDepth;
    float32 m_flModRate;
    bool m_bParallel;
    char pad_2456[0x3];
    soundsystem_lowlevel_VMixFilterDesc_t m_filterType;
    float32 m_flWidth;
    float32 m_flHeight;
    float32 m_flDepth;
    float32 m_flFeedbackScale;
    float32 m_flFeedbackWidth;
    float32 m_flFeedbackHeight;
    float32 m_flFeedbackDepth;
    float32 m_flOutputGain;
    float32 m_flTaps;
};
