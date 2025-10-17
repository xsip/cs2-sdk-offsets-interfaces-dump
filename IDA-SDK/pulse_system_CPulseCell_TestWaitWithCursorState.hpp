#pragma once
#include "enums.hpp"
#include "typedefs.hpp"

class pulse_runtime_lib_CPulse_ResumePoint;
#include "pulse_runtime_lib_PulseDocNodeID_t.hpp"
#include "pulse_runtime_lib_CPulse_ResumePoint.hpp"
#include "pulse_runtime_lib_CPulse_ResumePoint.hpp"
#include "pulse_runtime_lib_CPulse_ResumePoint.hpp"

class pulse_system_CPulseCell_TestWaitWithCursorState {
    char vTable501[0x8];
    pulse_runtime_lib_PulseDocNodeID_t m_nEditorNodeID;
    char end_pad_502[0x3c];
    pulse_runtime_lib_CPulse_ResumePoint m_WakeResume;
    pulse_runtime_lib_CPulse_ResumePoint m_WakeCancel;
    pulse_runtime_lib_CPulse_ResumePoint m_WakeFail;
};
