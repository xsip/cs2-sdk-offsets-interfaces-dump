#pragma once
#include "enums.hpp"
#include "typedefs.hpp"

class pulse_runtime_lib_CPulse_OutflowConnection;
#include "pulse_runtime_lib_CPulse_OutflowConnection.hpp"

class pulse_runtime_lib_DynamicOutflow_t {
    CGlobalSymbol m_OutflowID;
    pulse_runtime_lib_CPulse_OutflowConnection m_Connection;
};
