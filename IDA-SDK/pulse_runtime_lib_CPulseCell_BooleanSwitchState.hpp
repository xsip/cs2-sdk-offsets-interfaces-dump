#pragma once
#include "enums.hpp"
#include "typedefs.hpp"

class pulse_runtime_lib_CPulse_OutflowConnection;
#include "pulse_runtime_lib_PulseDocNodeID_t.hpp"
#include "pulse_runtime_lib_PulseObservableBoolExpression_t.hpp"
#include "pulse_runtime_lib_CPulse_OutflowConnection.hpp"

class pulse_runtime_lib_CPulseCell_BooleanSwitchState {
    char vTable501[0x8];
    pulse_runtime_lib_PulseDocNodeID_t m_nEditorNodeID;
    char end_pad_502[0x3c];
    pulse_runtime_lib_PulseObservableBoolExpression_t m_Condition;
    pulse_runtime_lib_CPulse_OutflowConnection m_SubGraph;
    pulse_runtime_lib_CPulse_OutflowConnection m_WhenTrue;
    pulse_runtime_lib_CPulse_OutflowConnection m_WhenFalse;
};
