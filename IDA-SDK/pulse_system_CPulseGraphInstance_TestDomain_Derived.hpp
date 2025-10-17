#pragma once
#include "enums.hpp"
#include "typedefs.hpp"


class pulse_system_CPulseGraphInstance_TestDomain_Derived {
    char pad_2701[0x118];
    char vTable4200[0x18];
    bool m_bIsRunningUnitTests;
    bool m_bExplicitTimeStepping;
    bool m_bExpectingToDestroyWithYieldedCursors;
    bool m_bQuietTracepoints;
    bool m_bExpectingCursorTerminatedDueToMaxInstructions;
    char pad_4201[0x3];
    int32_t m_nCursorsTerminatedDueToMaxInstructions;
    int32_t m_nNextValidateIndex;
    char m_Tracepoints[0x18];
    bool m_bTestYesOrNoPath;
    char end_pad_4202[0x7];
    int32_t m_nInstanceValueX;
    char end_pad_4203[0x4];
};
