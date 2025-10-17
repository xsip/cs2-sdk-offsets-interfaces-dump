#pragma once
#include "enums.hpp"
#include "typedefs.hpp"

#include "PulseDocNodeID_t.hpp"
#include "CPulse_ResumePoint.hpp"

class CPulseCell_BaseLerp {
    char _vtable_pad_493[0x8];
    PulseDocNodeID_t m_nEditorNodeID;
    char end_pad_494[0x3c];
    CPulse_ResumePoint m_WakeResume;
};
