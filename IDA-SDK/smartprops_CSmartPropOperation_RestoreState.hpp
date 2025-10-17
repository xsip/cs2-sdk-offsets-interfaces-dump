#pragma once
#include "enums.hpp"
#include "typedefs.hpp"


class smartprops_CSmartPropOperation_RestoreState {
    char vTable2559[0x8];
    CSmartPropAttributeBool m_bEnabled;
    char end_pad_2560[0x8];
    CSmartPropAttributeStateName m_StateName;
    CSmartPropAttributeBool m_bDiscardIfUknown;
};
