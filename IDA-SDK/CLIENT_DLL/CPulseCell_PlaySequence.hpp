#pragma once
#include "enums.hpp"
#include "typedefs.hpp"

#include "PulseDocNodeID_t.hpp"
#include "PulseNodeDynamicOutflows_t.hpp"
#include "CPulse_ResumePoint.hpp"
#include "CPulse_ResumePoint.hpp"

class CPulseCell_PlaySequence {
    char _vtable_pad_493[0x8];
    PulseDocNodeID_t m_nEditorNodeID;
    char end_pad_494[0x3c];
    CUtlString m_SequenceName;
    PulseNodeDynamicOutflows_t m_PulseAnimEvents;
    CPulse_ResumePoint m_OnFinished;
    CPulse_ResumePoint m_OnCanceled;
};
