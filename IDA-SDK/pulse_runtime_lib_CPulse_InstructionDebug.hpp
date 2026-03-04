#pragma once
#include "enums.hpp"
#include "typedefs.hpp"

#include "pulse_runtime_lib_PulseDocNodeID_t.hpp"
#include "pulse_runtime_lib_PulseDocNodeID_t.hpp"

class pulse_runtime_lib_CPulse_InstructionDebug {
    pulse_runtime_lib_PulseDocNodeID_t m_nFlowNodeID;
    pulse_runtime_lib_PulseDocNodeID_t m_nValueNodeID;
    CGlobalSymbol m_SequencePointName;
};
