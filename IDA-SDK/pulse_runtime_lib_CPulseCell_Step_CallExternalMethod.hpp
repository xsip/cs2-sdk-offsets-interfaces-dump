#pragma once
#include "enums.hpp"
#include "typedefs.hpp"

class pulse_runtime_lib_CPulse_ResumePoint;
#include "pulse_runtime_lib_PulseDocNodeID_t.hpp"
#include "pulse_runtime_lib_CPulse_ResumePoint.hpp"

class pulse_runtime_lib_CPulseCell_Step_CallExternalMethod {
    char vTable501[0x8];
    pulse_runtime_lib_PulseDocNodeID_t m_nEditorNodeID;
    char end_pad_502[0x3c];
    PulseSymbol_t m_MethodName;
    PulseSymbol_t m_GameBlackboard;
    char m_ExpectedArgs[0x10];
    pulse_runtime_lib_PulseMethodCallMode_t m_nAsyncCallMode;
    char pad_513[0x4];
    pulse_runtime_lib_CPulse_ResumePoint m_OnFinished;
};
