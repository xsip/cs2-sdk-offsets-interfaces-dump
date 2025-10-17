#pragma once
#include "enums.hpp"
#include "typedefs.hpp"

class pulse_runtime_lib_CPulse_OutflowConnection;
#include "pulse_runtime_lib_CPulse_OutflowConnection.hpp"

class pulse_runtime_lib_TimelineEvent_t {
    float32 m_flTimeFromPrevious;
    char pad_516[0x4];
    pulse_runtime_lib_CPulse_OutflowConnection m_EventOutflow;
};
