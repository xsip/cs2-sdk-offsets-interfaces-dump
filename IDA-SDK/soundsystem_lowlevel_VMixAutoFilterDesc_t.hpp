#pragma once
#include "enums.hpp"
#include "typedefs.hpp"

#include "soundsystem_lowlevel_VMixFilterDesc_t.hpp"

class soundsystem_lowlevel_VMixAutoFilterDesc_t {
    float32 m_flEnvelopeAmount;
    float32 m_flAttackTimeMS;
    float32 m_flReleaseTimeMS;
    soundsystem_lowlevel_VMixFilterDesc_t m_filter;
    float32 m_flLFOAmount;
    float32 m_flLFORate;
    float32 m_flPhase;
    soundsystem_lowlevel_VMixLFOShape_t m_nLFOShape;
};
