#pragma once
#include "enums.hpp"
#include "typedefs.hpp"


class compositematerialslib_CompositeMaterialAssemblyProcedure_t {
    char m_vecCompMatIncludes[0x18];
    char m_vecMatchFilters[0x18];
    char m_vecCompositeInputContainers[0x18];
    char m_vecPropertyMutators[0x18];
};
