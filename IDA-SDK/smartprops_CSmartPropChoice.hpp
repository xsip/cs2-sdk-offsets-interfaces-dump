#pragma once
#include "enums.hpp"
#include "typedefs.hpp"


class smartprops_CSmartPropChoice {
    char vTable2543[0x8];
    int32_t m_nElementID;
    char end_pad_2544[0x4];
    CUtlString m_Name;
    CUtlString m_DefaultOption;
    char m_Options[0x18];
};
