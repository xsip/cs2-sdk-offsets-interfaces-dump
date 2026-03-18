#pragma once
#include "enums.hpp"
#include "typedefs.hpp"

class pulse_runtime_lib_CPulse_OutflowConnection;
#include "pulse_runtime_lib_PulseDocNodeID_t.hpp"
#include "pulse_runtime_lib_PulseDocNodeID_t.hpp"
#include "pulse_runtime_lib_PulseSelectorOutflowList_t.hpp"
#include "pulse_runtime_lib_CPulse_OutflowConnection.hpp"

class pulse_runtime_lib_CPulseCell_InlineNodeSkipSelector {
    void **__vftable_0;
    pulse_runtime_lib_PulseDocNodeID_t m_nEditorNodeID;
    char end_pad_512[0x3c];
    pulse_runtime_lib_PulseDocNodeID_t m_nFlowNodeID;
    bool m_bAnd;
    char pad_519[0x3];
    pulse_runtime_lib_PulseSelectorOutflowList_t m_PassOutflow;
    pulse_runtime_lib_CPulse_OutflowConnection m_FailOutflow;
};
