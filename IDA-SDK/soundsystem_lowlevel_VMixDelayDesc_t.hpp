#pragma once
#include "enums.hpp"
#include "typedefs.hpp"

#include "soundsystem_lowlevel_VMixFilterDesc_t.hpp"

class soundsystem_lowlevel_VMixDelayDesc_t {
    soundsystem_lowlevel_VMixFilterDesc_t m_feedbackFilter;
    bool m_bEnableFilter;
    char pad_2457[0x3];
    float32 m_flDelay;
    float32 m_flDirectGain;
    float32 m_flDelayGain;
    float32 m_flFeedbackGain;
    float32 m_flWidth;
};
