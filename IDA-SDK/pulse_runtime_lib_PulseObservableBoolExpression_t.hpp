#pragma once
#include "enums.hpp"
#include "typedefs.hpp"

class pulse_runtime_lib_CPulse_OutflowConnection;
#include "pulse_runtime_lib_CPulse_OutflowConnection.hpp"

class pulse_runtime_lib_PulseObservableBoolExpression_t {
    pulse_runtime_lib_CPulse_OutflowConnection m_EvaluateConnection;
    char m_DependentObservableVars[0x18];
    char m_DependentObservableBlackboardReferences[0x18];
};
