#pragma once
#include "enums.hpp"
#include "typedefs.hpp"

#include "pulse_runtime_lib_PulseDocNodeID_t.hpp"

class pulse_runtime_lib_CPulse_BlackboardReference {
    char m_hBlackboardResource[0x8];
    PulseSymbol_t m_BlackboardResource;
    pulse_runtime_lib_PulseDocNodeID_t m_nNodeID;
    char pad_524[0x4];
    CGlobalSymbol m_NodeName;
};
