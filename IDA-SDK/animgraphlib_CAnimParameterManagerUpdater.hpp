#pragma once
#include "enums.hpp"
#include "typedefs.hpp"


class animgraphlib_CAnimParameterManagerUpdater {
    char vTable42[0x18];
    char m_parameters[0x18];
    char m_idToIndexMap[0x20];
    char m_nameToIndexMap[0x20];
    char m_indexToHandle[0x18];
    char m_autoResetParams[0x18];
    char m_autoResetMap[0x20];
    char end_pad_43[0x40];
};
