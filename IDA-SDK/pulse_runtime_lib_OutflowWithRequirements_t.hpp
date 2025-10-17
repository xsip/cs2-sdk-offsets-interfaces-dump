#pragma once
#include "enums.hpp"
#include "typedefs.hpp"

class pulse_runtime_lib_CPulse_OutflowConnection;
#include "pulse_runtime_lib_CPulse_OutflowConnection.hpp"
#include "pulse_runtime_lib_PulseDocNodeID_t.hpp"

class pulse_runtime_lib_OutflowWithRequirements_t {
    pulse_runtime_lib_CPulse_OutflowConnection m_Connection;
    pulse_runtime_lib_PulseDocNodeID_t m_DestinationFlowNodeID;
    char pad_529[0x4];
    char m_RequirementNodeIDs[0x18];
    char m_nCursorStateBlockIndex[0x18];
};
